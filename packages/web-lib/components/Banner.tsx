import	React, {ReactElement}				from	'react';
import	IconChevron							from	'../icons/IconChevron';
import	IconCross							from	'../icons/IconCross';
import type * as BannerTypes				from	'./Banner.d';

function	BannerBase({
	title,
	children,
	primaryButton,
	secondaryButton,
	...props
}: BannerTypes.TBanner): ReactElement {
	return (
		<div className={`yearn--banner ${props.className || ''}`}>
			<div className={'yearn--banner-content-wrapper'}>
				<h4 className={'yearn--banner-content-title'}>{title}</h4>
				<div className={'yearn--banner-content-text'}>{children}</div>
				{primaryButton || secondaryButton ? <div className={'yearn--banner-content-buttons'}>
					{primaryButton}
					{secondaryButton}
				</div> : null}
			</div>
		</div>
	);
}


function	BannerControlable({children, onClose, canClose = true}: BannerTypes.TBannerPagination): ReactElement {
	const	[currentSlide, set_currentSlide] = React.useState(0);
	const	[isVisible, set_isVisible] = React.useState(true);

	function	onTryToClose(): void {
		if (onClose) {
			onClose();
		} else {
			set_isVisible(false);
		}
	}

	function	renderPreviousChevron(): ReactElement {
		if (currentSlide === 0)
			return (<IconChevron className={'w-4 h-4 opacity-50 cursor-not-allowed'} />);
		return (
			<IconChevron
				className={'w-4 h-4 cursor-pointer'}
				onClick={(): void => set_currentSlide(currentSlide - 1)} />
		);
	}

	function	renderNextChevron(): ReactElement {
		if (currentSlide === (children as ReactElement[]).length - 1)
			return (<IconChevron className={'w-4 h-4 opacity-50 rotate-180 cursor-not-allowed'} />);
		return (
			<IconChevron
				className={'w-4 h-4 rotate-180 cursor-pointer'}
				onClick={(): void => set_currentSlide(currentSlide + 1)} />
		);
	}

	return (
		<div
			className={'yearn--banner-with-controls'}
			style={isVisible ? {} : {display: 'none'}}>
			{canClose ? <button onClick={onTryToClose} className={'absolute top-4 right-4 z-50'}>
				<IconCross className={'yearn--banner-with-controls-icons-cross'} />
			</button> : null}

			{React.cloneElement(children[currentSlide])}
			
			{children.length > 1 ? <div className={'yearn--banner-with-controls-pagination'}>
				{renderPreviousChevron()}
				<p className={'text-sm tabular-nums'}>{`${currentSlide + 1}/${(children as ReactElement[]).length}`}</p>
				{renderNextChevron()}
			</div> : null}
		</div>
	);
}

export const Banner = Object.assign(BannerBase, {
	WithControls: BannerControlable
});