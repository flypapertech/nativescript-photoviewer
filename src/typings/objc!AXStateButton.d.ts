
declare class AXStateButton extends UIButton {

	static alloc(): AXStateButton; // inherited from NSObject

	static appearance(): AXStateButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): AXStateButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): AXStateButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AXStateButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): AXStateButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): AXStateButton; // inherited from UIAppearance

	static button(): AXStateButton;

	static buttonWithType(buttonType: UIButtonType): AXStateButton; // inherited from UIButton

	static buttonWithTypePrimaryAction(buttonType: UIButtonType, primaryAction: UIAction): AXStateButton; // inherited from UIButton

	static new(): AXStateButton; // inherited from NSObject

	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): AXStateButton; // inherited from UIButton

	static systemButtonWithPrimaryAction(primaryAction: UIAction): AXStateButton; // inherited from UIButton

	animateControlStateChanges: boolean;

	controlStateAnimationDuration: number;

	controlStateAnimationTimingFunction: CAMediaTimingFunction;

	alphaForState(controlState: UIControlState): number;

	backgroundColorForState(controlState: UIControlState): UIColor;

	borderColorForState(controlState: UIControlState): UIColor;

	borderWidthForState(controlState: UIControlState): number;

	cornerRadiusForState(controlState: UIControlState): number;

	imageAlphaForState(controlState: UIControlState): number;

	setAlphaForState(alpha: number, controlState: UIControlState): void;

	setBackgroundColorForState(backgroundColor: UIColor, controlState: UIControlState): void;

	setBorderColorForState(borderColor: UIColor, controlState: UIControlState): void;

	setBorderWidthForState(borderWidth: number, controlState: UIControlState): void;

	setCornerRadiusForState(cornerRadius: number, controlState: UIControlState): void;

	setImageAlphaForState(alpha: number, controlState: UIControlState): void;

	setShadowColorForState(shadowColor: UIColor, controlState: UIControlState): void;

	setShadowOffsetForState(shadowOffset: CGSize, controlState: UIControlState): void;

	setShadowOpacityForState(shadowOpacity: number, controlState: UIControlState): void;

	setShadowPathForState(shadowPath: UIBezierPath, controlState: UIControlState): void;

	setShadowRadiusForState(shadowRadius: number, controlState: UIControlState): void;

	setTintColorForState(tintColor: UIColor, controlState: UIControlState): void;

	setTitleAlphaForState(alpha: number, controlState: UIControlState): void;

	setTransformRotationXForState(radians: number, controlState: UIControlState): void;

	setTransformRotationYForState(radians: number, controlState: UIControlState): void;

	setTransformRotationZForState(radians: number, controlState: UIControlState): void;

	setTransformScaleForState(scale: number, controlState: UIControlState): void;

	shadowColorForState(controlState: UIControlState): UIColor;

	shadowOffsetForState(controlState: UIControlState): CGSize;

	shadowOpacityForState(controlState: UIControlState): number;

	shadowPathForState(controlState: UIControlState): UIBezierPath;

	shadowRadiusForState(controlState: UIControlState): number;

	tintColorForState(controlState: UIControlState): UIColor;

	titleAlphaForState(controlState: UIControlState): number;

	transformRotationXForState(controlState: UIControlState): number;

	transformRotationYForState(controlState: UIControlState): number;

	transformRotationZForState(controlState: UIControlState): number;

	transformScaleForState(controlState: UIControlState): number;
}

declare var AXStateButtonVersionNumber: number;

declare var AXStateButtonVersionString: interop.Reference<number>;
