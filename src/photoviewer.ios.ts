import { PhotoViewerOptions, NYTPhotoItem, PhotoViewer as PhotoViewerBase } from ".";
import { Color, Frame, Utils, ImageSource } from "@nativescript/core";

export * from './photoviewer.common';

var _dataSource: AXPhotosDataSource;
var rootFrame: Frame;
export class PhotoViewer implements PhotoViewerBase {

    public nativeView: AXPhotosViewController;
    private _delegate: AXPhotosViewerDelegateImpl;

    constructor() {
        rootFrame = Frame.topmost();
        let photosArray = NSMutableArray.alloc<AXPhoto>().init();
        _dataSource = new AXPhotosDataSource({photos: photosArray});
     }

    get ios(): any {
        return this.nativeView;
    }

    public async showGallery(imagesArray: Array<string | NYTPhotoItem>, options?: PhotoViewerOptions) {

        if(!options)
            options = {};
        if(!options.ios)
            options.ios = {};
        if(!options.android)
            options.android = {};

        const photosArray: AXPhotoProtocol[] = [] 
        let startIndex: number = options.startIndex || 0;
        let iosCompletionCallback = options.ios.completionCallback || null;
    
        imagesArray.forEach((imageItem: string | NYTPhotoItem) => {
    
            let imageToAdd: AXPhoto | undefined = undefined
    
            let fontFamily = options.ios.fontFamily || "HelveticaNeue";
            let titleFontSize = options.ios.titleFontSize || 16;
            let summaryFontSize = options.ios.summaryFontSize || 14;
            let creditFontSize = options.ios.creditFontSize || 14;
            
            let titleColor = options.ios.titleColor || new Color("white").ios;
            let summaryColor = options.ios.summaryColor || new Color("lightgray").ios;
            let creditColor = options.ios.creditColor || new Color("gray").ios;
    
            if(isNYTPhotoItem(imageItem)){
    
                if (imageItem.imageURL && Utils.isFileOrResourcePath(imageItem.imageURL)) {
                    imageItem.image = ImageSource.fromFileOrResourceSync(imageItem.imageURL).ios;
                    imageItem.imageURL = undefined
                }

                const url = imageItem.imageURL ? NSURL.alloc().initWithString(imageItem.imageURL) : undefined

                const attributedTitle = this.attributedString(imageItem.title, titleColor, fontFamily, titleFontSize);
                const attributedDescription = this.attributedString(imageItem.summary, summaryColor, fontFamily, summaryFontSize);
                const attributedCredit = this.attributedString(imageItem.credit, creditColor, fontFamily, creditFontSize);
                imageToAdd = AXPhoto.alloc().initWithAttributedTitleAttributedDescriptionAttributedCreditImageDataImageUrl(attributedTitle, attributedDescription, attributedCredit, undefined, imageItem.image, url)

            }
            else if(typeof imageItem === 'string'){
                const url =  NSURL.alloc().initWithString(imageItem)
                imageToAdd = AXPhoto.alloc().initWithAttributedTitleAttributedDescriptionAttributedCreditImageDataImageUrl(undefined, undefined, undefined, undefined, undefined, url)
            }
            else{
                console.log("ERROR: Passed object is not a image path/url or NYTPhotoItem object!", imageItem);
                return
            }

            photosArray.push(imageToAdd);
        });

        const dataSource = AXPhotosDataSource.alloc().initWithPhotos(photosArray)

        return new Promise<void>((resolve) => {
            this._delegate = AXPhotosViewerDelegateImpl.initWithResolve(resolve);
            const controller = AXPhotosViewController.alloc().initWithDataSource(dataSource)
            this.nativeView = controller
            this.nativeView.delegate = this._delegate;
            ;(rootFrame.ios.controller as UINavigationController).presentViewControllerAnimatedCompletion(this.nativeView, true, iosCompletionCallback)
        });
    }

    private attributedString(text: string, color: UIColor, fontFamily: string, fontSize: number): NSAttributedString {
        const attributeOptions = new NSDictionary({objects:[color, UIFont.fontWithNameSize(fontFamily, fontSize)], forKeys: [NSForegroundColorAttributeName, NSFontAttributeName]})
        return NSAttributedString.alloc().initWithStringAttributes(text || "", attributeOptions);
    }
}


function isNYTPhotoItem(item: any): item is NYTPhotoItem {
    return typeof item.image === 'object' || typeof item.imageURL === 'string';
}
@NativeClass()
class AXPhotosViewerDelegateImpl extends NSObject implements AXPhotosViewControllerDelegate {
    static ObjCProtocols = [AXPhotosViewControllerDelegate];
    private _resolve: () => void;

    public static initWithResolve(resolve: () => void): AXPhotosViewerDelegateImpl {
        const delegate = AXPhotosViewerDelegateImpl.new() as AXPhotosViewerDelegateImpl;
        delegate._resolve = resolve;
        return delegate;
    }

    photosViewControllerDidDismiss(photosViewController: AXPhotosViewController) {
        this._resolve();
    }
}