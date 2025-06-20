class StickyNavigation {
	constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = $('#nav-branques').outerHeight(true);
		let self = this;
		$(".et-branques-tab").click(function () {
			self.onTabClick(event, $(this));
		});
		$(window).scroll(() => {
			this.onScroll();
		});
		$(window).resize(() => {
			this.onResize();
		});
		$(document).ready(() => {
			this.checkTabContainerPosition();
		});
	}

	onTabClick(event, element) {
		event.preventDefault();
		let scrollTop =
			$(element.attr("href")).offset().top - nav + 1;
		$("html, body").animate({ scrollTop: scrollTop }, 600);
	}

	onScroll() {
		this.checkTabContainerPosition();
		this.findCurrentTabSelector();
	}

	onResize() {
		if (this.currentId) {
			this.setSliderCss();
		}
	}

	checkTabContainerPosition() {
		let offset = $('.et-branques-tabs-container').height();
		if (window.pageYOffset >= posSections['#branques'] && (window.innerHeight + window.scrollY) <= $('#camisas').position().top + offset) {
			$(".et-branques-tabs-container").addClass("et-branques-tabs-container--bottom");
		} else {
			$(".et-branques-tabs-container").removeClass("et-branques-tabs-container--bottom");
		}
	}

	findCurrentTabSelector(element) {
		let newCurrentId;
		let newCurrentTab;
		let self = this;
		$(".et-branques-tab").each(function () {
			let id = $(this).attr("href");
			let offsetTop = $(id).offset().top - nav - 1
			let offsetBottom =
				$(id).offset().top + $(id).height() - self.tabContainerHeight;
			if (
				$(window).scrollTop() > offsetTop &&
				$(window).scrollTop() < offsetBottom
			) {
				newCurrentId = id;
				newCurrentTab = $(this);
			}
		});
		if (this.currentId != newCurrentId || this.currentId === null) {
			this.currentId = newCurrentId;
			this.currentTab = newCurrentTab;
			this.setSliderCss();
		}
	}

	setSliderCss() {
		let width = 0;
		let left = 0;
		if (this.currentTab) {
			width = this.currentTab.css("width");
			left = this.currentTab.offset().left;
		}
		$(".et-branques-tab-slider").css("width", width);
		$(".et-branques-tab-slider").css("left", left);
	}
}
$(document).ready(function () {
	var stick = new StickyNavigation();
	stick.findCurrentTabSelector()
});
