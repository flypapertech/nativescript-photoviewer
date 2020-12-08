
declare class AXButton extends AXStateButton {

	static alloc(): AXButton; // inherited from NSObject

	static appearance(): AXButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): AXButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): AXButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AXButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): AXButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AXButton; // inherited from UIAppearance

	static button(): AXButton; // inherited from AXStateButton

	static buttonWithType(buttonType: UIButtonType): AXButton; // inherited from UIButton

	static buttonWithTypePrimaryAction(buttonType: UIButtonType, primaryAction: UIAction): AXButton; // inherited from UIButton

	static new(): AXButton; // inherited from NSObject

	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): AXButton; // inherited from UIButton

	static systemButtonWithPrimaryAction(primaryAction: UIAction): AXButton; // inherited from UIButton
}

declare class AXCaptionView extends UIView implements AXCaptionViewProtocol {

	static alloc(): AXCaptionView; // inherited from NSObject

	static appearance(): AXCaptionView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): AXCaptionView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): AXCaptionView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AXCaptionView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): AXCaptionView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AXCaptionView; // inherited from UIAppearance

	static new(): AXCaptionView; // inherited from NSObject

	creditLabel: UILabel;

	readonly defaultCreditAttributes: NSDictionary<string, any>;

	readonly defaultDescriptionAttributes: NSDictionary<string, any>;

	readonly defaultTitleAttributes: NSDictionary<string, any>;

	descriptionLabel: UILabel;

	titleLabel: UILabel;

	animateCaptionInfoChanges: boolean; // inherited from AXCaptionViewProtocol

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	applyCaptionInfoWithAttributedTitleAttributedDescriptionAttributedCredit(attributedTitle: NSAttributedString, attributedDescription: NSAttributedString, attributedCredit: NSAttributedString): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	sizeThatFits(size: CGSize): CGSize;
}

interface AXCaptionViewProtocol extends NSObjectProtocol {

	animateCaptionInfoChanges: boolean;

	applyCaptionInfoWithAttributedTitleAttributedDescriptionAttributedCredit(attributedTitle: NSAttributedString, attributedDescription: NSAttributedString, attributedCredit: NSAttributedString): void;

	sizeThatFits(size: CGSize): CGSize;
}
declare var AXCaptionViewProtocol: {

	prototype: AXCaptionViewProtocol;
};

declare class AXConstants extends NSObject {

	static alloc(): AXConstants; // inherited from NSObject

	static new(): AXConstants; // inherited from NSObject

	static readonly frameAnimDuration: number;

	static readonly overlayBarButtonItemSpacing: number;

	static readonly overlayForegroundColor: UIColor;
}

declare class AXLoadingView extends UIView implements AXLoadingViewProtocol {

	static alloc(): AXLoadingView; // inherited from NSObject

	static appearance(): AXLoadingView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): AXLoadingView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): AXLoadingView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AXLoadingView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): AXLoadingView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AXLoadingView; // inherited from UIAppearance

	static new(): AXLoadingView; // inherited from NSObject

	readonly errorAttributes: NSDictionary<string, any>;

	readonly errorImage: UIImage;

	readonly errorImageView: UIImageView;

	readonly errorLabel: UILabel;

	readonly errorText: string;

	readonly indicatorView: UIView;

	readonly retryAttributes: NSDictionary<string, any>;

	readonly retryButton: AXButton;

	readonly retryHandler: () => void;

	readonly retryText: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeError(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	showErrorRetryHandler(error: NSError, retryHandler: () => void): void;

	sizeThatFits(size: CGSize): CGSize;

	startLoadingWithInitialProgress(initialProgress: number): void;

	stopLoading(): void;

	updateProgress(progress: number): void;
}

interface AXLoadingViewProtocol extends NSObjectProtocol {

	removeError(): void;

	showErrorRetryHandler(error: NSError, retryHandler: () => void): void;

	sizeThatFits(size: CGSize): CGSize;

	startLoadingWithInitialProgress(initialProgress: number): void;

	stopLoading(): void;

	updateProgress?(progress: number): void;
}
declare var AXLoadingViewProtocol: {

	prototype: AXLoadingViewProtocol;
};

interface AXNetworkIntegrationDelegate extends NSObjectProtocol {

	networkIntegrationDidUpdateLoadingProgressFor?(networkIntegration: AXNetworkIntegrationProtocol, progress: number, photo: AXPhotoProtocol): void;

	networkIntegrationLoadDidFailWithFor(networkIntegration: AXNetworkIntegrationProtocol, error: NSError, photo: AXPhotoProtocol): void;

	networkIntegrationLoadDidFinishWith(networkIntegration: AXNetworkIntegrationProtocol, photo: AXPhotoProtocol): void;
}
declare var AXNetworkIntegrationDelegate: {

	prototype: AXNetworkIntegrationDelegate;
};

interface AXNetworkIntegrationProtocol extends NSObjectProtocol {

	delegate: AXNetworkIntegrationDelegate;

	cancelAllLoads(): void;

	cancelLoadFor(photo: AXPhotoProtocol): void;

	loadPhoto(photo: AXPhotoProtocol): void;
}
declare var AXNetworkIntegrationProtocol: {

	prototype: AXNetworkIntegrationProtocol;
};

interface AXOverlayTitleViewProtocol extends NSObjectProtocol {

	sizeToFit(): void;

	tweenBetweenLowIndexHighIndexPercent?(low: number, high: number, percent: number): void;
}
declare var AXOverlayTitleViewProtocol: {

	prototype: AXOverlayTitleViewProtocol;
};

declare class AXOverlayView extends UIView {

	static alloc(): AXOverlayView; // inherited from NSObject

	static appearance(): AXOverlayView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): AXOverlayView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): AXOverlayView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AXOverlayView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): AXOverlayView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AXOverlayView; // inherited from UIAppearance

	static new(): AXOverlayView; // inherited from NSObject

	animateCaptionViewChanges: boolean;

	bottomStackContainer: AXStackableViewContainer;

	captionView: AXCaptionViewProtocol;

	leftBarButtonItem: UIBarButtonItem;

	leftBarButtonItems: NSArray<UIBarButtonItem>;

	rightBarButtonItem: UIBarButtonItem;

	rightBarButtonItems: NSArray<UIBarButtonItem>;

	title: string;

	titleTextAttributes: NSDictionary<string, any>;

	titleView: AXOverlayTitleViewProtocol;

	readonly toolbar: UIToolbar;

	topStackContainer: AXStackableViewContainer;
}

declare class AXPagingConfig extends NSObject {

	static alloc(): AXPagingConfig; // inherited from NSObject

	static new(): AXPagingConfig; // inherited from NSObject

	constructor(o: { interPhotoSpacing: number; });

	constructor(o: { loadingViewClass: typeof NSObject; });

	constructor(o: { navigationOrientation: UIPageViewControllerNavigationOrientation; });

	constructor(o: { navigationOrientation: UIPageViewControllerNavigationOrientation; interPhotoSpacing: number; loadingViewClass: typeof NSObject; });

	initWithInterPhotoSpacing(interPhotoSpacing: number): this;

	initWithLoadingViewClass(loadingViewClass: typeof NSObject): this;

	initWithNavigationOrientation(navigationOrientation: UIPageViewControllerNavigationOrientation): this;

	initWithNavigationOrientationInterPhotoSpacingLoadingViewClass(navigationOrientation: UIPageViewControllerNavigationOrientation, interPhotoSpacing: number, loadingViewClass: typeof NSObject): this;
}

declare class AXPhoto extends NSObject implements AXPhotoProtocol {

	static alloc(): AXPhoto; // inherited from NSObject

	static new(): AXPhoto; // inherited from NSObject

	attributedCredit: NSAttributedString;

	attributedDescription: NSAttributedString;

	attributedTitle: NSAttributedString;

	url: NSURL;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	image: UIImage; // inherited from AXPhotoProtocol

	imageData: NSData; // inherited from AXPhotoProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { attributedTitle: NSAttributedString; attributedDescription: NSAttributedString; attributedCredit: NSAttributedString; imageData?: NSData; image?: UIImage; url?: NSURL; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithAttributedTitleAttributedDescriptionAttributedCreditImageDataImageUrl(attributedTitle?: NSAttributedString, attributedDescription?: NSAttributedString, attributedCredit?: NSAttributedString, imageData?: NSData, image?: UIImage, url?: NSURL): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface AXPhotoProtocol extends NSObjectProtocol {

	attributedCredit?: NSAttributedString;

	attributedDescription?: NSAttributedString;

	attributedTitle?: NSAttributedString;

	image: UIImage;

	imageData: NSData;

	url: NSURL;
}
declare var AXPhotoProtocol: {

	prototype: AXPhotoProtocol;
};

declare class AXPhotoViewController extends UIViewController {

	static alloc(): AXPhotoViewController; // inherited from NSObject

	static new(): AXPhotoViewController; // inherited from NSObject

	delegate: AXPhotoViewControllerDelegate;

	pageIndex: number;

	constructor(o: { loadingView: AXLoadingViewProtocol; notificationCenter: NSNotificationCenter; });

	applyPhoto(photo: AXPhotoProtocol): void;

	initWithLoadingViewNotificationCenter(loadingView: AXLoadingViewProtocol, notificationCenter: NSNotificationCenter): this;
}

interface AXPhotoViewControllerDelegate extends NSObjectProtocol {

	photoViewControllerMaximumZoomScaleForPhotoAtIndexMinimumZoomScaleImageSize(photoViewController: AXPhotoViewController, index: number, minimumZoomScale: number, imageSize: CGSize): number;

	photoViewControllerRetryDownloadForPhoto(photoViewController: AXPhotoViewController, photo: AXPhotoProtocol): void;
}
declare var AXPhotoViewControllerDelegate: {

	prototype: AXPhotoViewControllerDelegate;
};

declare var AXPhotoViewerVersionNumber: number;

declare var AXPhotoViewerVersionString: interop.Reference<number>;

declare class AXPhotosDataSource extends NSObject {

	static alloc(): AXPhotosDataSource; // inherited from NSObject

	static new(): AXPhotosDataSource; // inherited from NSObject

	readonly numberOfPhotos: number;

	constructor(o: { photos: NSArray<AXPhotoProtocol> | AXPhotoProtocol[]; });

	constructor(o: { photos: NSArray<AXPhotoProtocol> | AXPhotoProtocol[]; initialPhotoIndex: number; });

	constructor(o: { photos: NSArray<AXPhotoProtocol> | AXPhotoProtocol[]; initialPhotoIndex: number; prefetchBehavior: AXPhotosPrefetchBehavior; });

	initWithPhotos(photos: NSArray<AXPhotoProtocol> | AXPhotoProtocol[]): this;

	initWithPhotosInitialPhotoIndex(photos: NSArray<AXPhotoProtocol> | AXPhotoProtocol[], initialPhotoIndex: number): this;

	initWithPhotosInitialPhotoIndexPrefetchBehavior(photos: NSArray<AXPhotoProtocol> | AXPhotoProtocol[], initialPhotoIndex: number, prefetchBehavior: AXPhotosPrefetchBehavior): this;

	photoAtIndex(index: number): AXPhotoProtocol;
}

declare const enum AXPhotosPrefetchBehavior {

	Conservative = 0,

	Regular = 2,

	Aggressive = 4
}

declare class AXPhotosViewController extends UIViewController implements AXNetworkIntegrationDelegate, AXPhotoViewControllerDelegate, UIGestureRecognizerDelegate, UIPageViewControllerDataSource, UIPageViewControllerDelegate {

	static alloc(): AXPhotosViewController; // inherited from NSObject

	static new(): AXPhotosViewController; // inherited from NSObject

	readonly actionBarButtonItem: UIBarButtonItem;

	readonly closeBarButtonItem: UIBarButtonItem;

	readonly currentPhotoIndex: number;

	readonly currentPhotoViewController: AXPhotoViewController;

	dataSource: AXPhotosDataSource;

	delegate: AXPhotosViewControllerDelegate;

	readonly networkIntegration: AXNetworkIntegrationProtocol;

	readonly overlayView: AXOverlayView;

	readonly pageViewController: UIPageViewController;

	readonly pagingConfig: AXPagingConfig;

	readonly singleTapGestureRecognizer: UITapGestureRecognizer;

	readonly transitionInfo: AXTransitionInfo;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { fromPreviewingPhotosViewController: AXPreviewingPhotosViewController; });

	constructor(o: { fromPreviewingPhotosViewController: AXPreviewingPhotosViewController; pagingConfig: AXPagingConfig; });

	constructor(o: { fromPreviewingPhotosViewController: AXPreviewingPhotosViewController; pagingConfig: AXPagingConfig; transitionInfo: AXTransitionInfo; });

	constructor(o: { dataSource: AXPhotosDataSource; });

	constructor(o: { dataSource: AXPhotosDataSource; networkIntegration: AXNetworkIntegrationProtocol; });

	constructor(o: { dataSource: AXPhotosDataSource; pagingConfig: AXPagingConfig; });

	constructor(o: { dataSource: AXPhotosDataSource; pagingConfig: AXPagingConfig; networkIntegration: AXNetworkIntegrationProtocol; });

	constructor(o: { dataSource: AXPhotosDataSource; pagingConfig: AXPagingConfig; transitionInfo: AXTransitionInfo; });

	constructor(o: { dataSource: AXPhotosDataSource; pagingConfig: AXPagingConfig; transitionInfo: AXTransitionInfo; networkIntegration: AXNetworkIntegrationProtocol; });

	constructor(o: { networkIntegration: AXNetworkIntegrationProtocol; });

	constructor(o: { pagingConfig: AXPagingConfig; transitionInfo: AXTransitionInfo; });

	constructor(o: { pagingConfig: AXPagingConfig; transitionInfo: AXTransitionInfo; networkIntegration: AXNetworkIntegrationProtocol; });

	actionCompletedWithActivityTypeForPhoto(activityType: string, photo: AXPhotoProtocol): void;

	class(): typeof NSObject;

	closeAction(sender: UIBarButtonItem): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didNavigateToPhotoAtIndex(photo: AXPhotoProtocol, index: number): void;

	gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldReceiveEvent(gestureRecognizer: UIGestureRecognizer, event: _UIEvent): boolean;

	gestureRecognizerShouldReceivePress(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean;

	gestureRecognizerShouldReceiveTouch(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean;

	gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldRequireFailureOfGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	handleActionButtonTappedForPhoto(photo: AXPhotoProtocol): boolean;

	initFromPreviewingPhotosViewController(previewingPhotosViewController: AXPreviewingPhotosViewController): this;

	initFromPreviewingPhotosViewControllerPagingConfig(previewingPhotosViewController: AXPreviewingPhotosViewController, pagingConfig: AXPagingConfig): this;

	initFromPreviewingPhotosViewControllerPagingConfigTransitionInfo(previewingPhotosViewController: AXPreviewingPhotosViewController, pagingConfig: AXPagingConfig, transitionInfo: AXTransitionInfo): this;

	initWithDataSource(dataSource: AXPhotosDataSource): this;

	initWithDataSourceNetworkIntegration(dataSource: AXPhotosDataSource, networkIntegration: AXNetworkIntegrationProtocol): this;

	initWithDataSourcePagingConfig(dataSource: AXPhotosDataSource, pagingConfig: AXPagingConfig): this;

	initWithDataSourcePagingConfigNetworkIntegration(dataSource: AXPhotosDataSource, pagingConfig: AXPagingConfig, networkIntegration: AXNetworkIntegrationProtocol): this;

	initWithDataSourcePagingConfigTransitionInfo(dataSource: AXPhotosDataSource, pagingConfig: AXPagingConfig, transitionInfo: AXTransitionInfo): this;

	initWithDataSourcePagingConfigTransitionInfoNetworkIntegration(dataSource: AXPhotosDataSource, pagingConfig: AXPagingConfig, transitionInfo: AXTransitionInfo, networkIntegration: AXNetworkIntegrationProtocol): this;

	initWithNetworkIntegration(networkIntegration: AXNetworkIntegrationProtocol): this;

	initWithPagingConfigTransitionInfo(pagingConfig: AXPagingConfig, transitionInfo: AXTransitionInfo): this;

	initWithPagingConfigTransitionInfoNetworkIntegration(pagingConfig: AXPagingConfig, transitionInfo: AXTransitionInfo, networkIntegration: AXNetworkIntegrationProtocol): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	maximumZoomScaleForPhotoMinimumZoomScaleImageSize(photo: AXPhotoProtocol, minimumZoomScale: number, imageSize: CGSize): number;

	navigateToPhotoIndexAnimated(photoIndex: number, animated: boolean): void;

	networkIntegrationDidUpdateLoadingProgressFor(networkIntegration: AXNetworkIntegrationProtocol, progress: number, photo: AXPhotoProtocol): void;

	networkIntegrationLoadDidFailWithFor(networkIntegration: AXNetworkIntegrationProtocol, error: NSError, photo: AXPhotoProtocol): void;

	networkIntegrationLoadDidFinishWith(networkIntegration: AXNetworkIntegrationProtocol, photo: AXPhotoProtocol): void;

	overlayViewVisibilityWillChange(overlayView: AXOverlayView, visible: boolean): void;

	pageViewControllerDidFinishAnimatingPreviousViewControllersTransitionCompleted(pageViewController: UIPageViewController, finished: boolean, previousViewControllers: NSArray<UIViewController> | UIViewController[], completed: boolean): void;

	pageViewControllerPreferredInterfaceOrientationForPresentation(pageViewController: UIPageViewController): UIInterfaceOrientation;

	pageViewControllerSpineLocationForInterfaceOrientation(pageViewController: UIPageViewController, orientation: UIInterfaceOrientation): UIPageViewControllerSpineLocation;

	pageViewControllerSupportedInterfaceOrientations(pageViewController: UIPageViewController): UIInterfaceOrientationMask;

	pageViewControllerViewControllerAfterViewController(pageViewController: UIPageViewController, viewController: UIViewController): UIViewController;

	pageViewControllerViewControllerBeforeViewController(pageViewController: UIPageViewController, viewController: UIViewController): UIViewController;

	pageViewControllerWillTransitionToViewControllers(pageViewController: UIPageViewController, pendingViewControllers: NSArray<UIViewController> | UIViewController[]): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	photoViewControllerMaximumZoomScaleForPhotoAtIndexMinimumZoomScaleImageSize(photoViewController: AXPhotoViewController, index: number, minimumZoomScale: number, imageSize: CGSize): number;

	photoViewControllerRetryDownloadForPhoto(photoViewController: AXPhotoViewController, photo: AXPhotoProtocol): void;

	presentationCountForPageViewController(pageViewController: UIPageViewController): number;

	presentationIndexForPageViewController(pageViewController: UIPageViewController): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shareAction(barButtonItem: UIBarButtonItem): void;

	willUpdateOverlayViewForPhotoAtIndexTotalNumberOfPhotos(overlayView: AXOverlayView, photo: AXPhotoProtocol, index: number, totalNumberOfPhotos: number): void;
}

interface AXPhotosViewControllerDelegate extends NSObjectProtocol {

	photosViewControllerActionCompletedWithActivityTypeForPhoto?(photosViewController: AXPhotosViewController, activityType: string, photo: AXPhotoProtocol): void;

	photosViewControllerDidDismiss?(photosViewController: AXPhotosViewController): void;

	photosViewControllerDidNavigateToPhotoAtIndex?(photosViewController: AXPhotosViewController, photo: AXPhotoProtocol, index: number): void;

	photosViewControllerHandleActionButtonTappedForPhoto?(photosViewController: AXPhotosViewController, photo: AXPhotoProtocol): void;

	photosViewControllerMaximumZoomScaleForPhotoMinimumZoomScaleImageSize?(photosViewController: AXPhotosViewController, photo: AXPhotoProtocol, minimumZoomScale: number, imageSize: CGSize): number;

	photosViewControllerOverlayViewVisibilityWillChange?(photosViewController: AXPhotosViewController, overlayView: AXOverlayView, visible: boolean): void;

	photosViewControllerWillDismiss?(photosViewController: AXPhotosViewController): void;

	photosViewControllerWillUpdateOverlayViewForPhotoAtIndexTotalNumberOfPhotos?(photosViewController: AXPhotosViewController, overlayView: AXOverlayView, photo: AXPhotoProtocol, index: number, totalNumberOfPhotos: number): void;
}
declare var AXPhotosViewControllerDelegate: {

	prototype: AXPhotosViewControllerDelegate;
};

declare class AXPhotosViewControllerNotification extends NSObject {

	static alloc(): AXPhotosViewControllerNotification; // inherited from NSObject

	static new(): AXPhotosViewControllerNotification; // inherited from NSObject
}

declare class AXPreviewingPhotosViewController extends UIViewController implements AXNetworkIntegrationDelegate {

	static alloc(): AXPreviewingPhotosViewController; // inherited from NSObject

	static new(): AXPreviewingPhotosViewController; // inherited from NSObject

	dataSource: AXPhotosDataSource;

	readonly networkIntegration: AXNetworkIntegrationProtocol;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { dataSource: AXPhotosDataSource; });

	constructor(o: { dataSource: AXPhotosDataSource; networkIntegration: AXNetworkIntegrationProtocol; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithDataSource(dataSource: AXPhotosDataSource): this;

	initWithDataSourceNetworkIntegration(dataSource: AXPhotosDataSource, networkIntegration: AXNetworkIntegrationProtocol): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	networkIntegrationDidUpdateLoadingProgressFor(networkIntegration: AXNetworkIntegrationProtocol, progress: number, photo: AXPhotoProtocol): void;

	networkIntegrationLoadDidFailWithFor(networkIntegration: AXNetworkIntegrationProtocol, error: NSError, photo: AXPhotoProtocol): void;

	networkIntegrationLoadDidFinishWith(networkIntegration: AXNetworkIntegrationProtocol, photo: AXPhotoProtocol): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class AXStackableViewContainer extends UIView {

	static alloc(): AXStackableViewContainer; // inherited from NSObject

	static appearance(): AXStackableViewContainer; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): AXStackableViewContainer; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): AXStackableViewContainer; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AXStackableViewContainer; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): AXStackableViewContainer; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AXStackableViewContainer; // inherited from UIAppearance

	static new(): AXStackableViewContainer; // inherited from NSObject
}

declare class AXTransitionInfo extends NSObject {

	static alloc(): AXTransitionInfo; // inherited from NSObject

	static new(): AXTransitionInfo; // inherited from NSObject

	dismissalSpringDampingRatio: number;

	duration: number;

	fadingBackdropView: () => UIView;

	presentationSpringDampingRatio: number;

	constructor(o: { interactiveDismissalEnabled: boolean; startingView: UIImageView; endingView: (p1: AXPhotoProtocol, p2: number) => UIImageView; });

	constructor(o: { startingView: UIImageView; endingView: (p1: AXPhotoProtocol, p2: number) => UIImageView; });

	initWithInteractiveDismissalEnabledStartingViewEndingView(interactiveDismissalEnabled: boolean, startingView: UIImageView, endingView: (p1: AXPhotoProtocol, p2: number) => UIImageView): this;

	initWithStartingViewEndingView(startingView: UIImageView, endingView: (p1: AXPhotoProtocol, p2: number) => UIImageView): this;
}

declare class SimpleNetworkIntegration extends NSObject implements AXNetworkIntegrationProtocol {

	static alloc(): SimpleNetworkIntegration; // inherited from NSObject

	static new(): SimpleNetworkIntegration; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	delegate: AXNetworkIntegrationDelegate; // inherited from AXNetworkIntegrationProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	cancelAllLoads(): void;

	cancelLoadFor(photo: AXPhotoProtocol): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	loadPhoto(photo: AXPhotoProtocol): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}
