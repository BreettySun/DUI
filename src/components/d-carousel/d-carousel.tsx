import { Component, Host, h, State, Element, Prop } from "@stencil/core";

@Component({
	tag: "d-carousel",
	styleUrl: "d-carousel.css",
	shadow: true,
})
export class DCarousel {
	@State() currentIndex: number = 0;
	@Element() el: HTMLElement;
	@Prop() autoplay: boolean = false;
	@Prop() delay: number = 3000; // Default delay of 3 seconds

	private items: HTMLElement[] = [];
	private autoplayInterval: number;

	componentDidLoad() {
		this.items = Array.from(this.el.children) as HTMLElement[];
		this.showSlide(this.currentIndex);
		if (this.autoplay) {
			this.startAutoplay();
		}
	}

	disconnectedCallback() {
		this.stopAutoplay();
	}

	private startAutoplay() {
		this.autoplayInterval = window.setInterval(() => {
			this.nextSlide();
		}, this.delay);
	}

	private stopAutoplay() {
		if (this.autoplayInterval) {
			window.clearInterval(this.autoplayInterval);
		}
	}

	private showSlide(index: number) {
		this.items.forEach((item, i) => {
			item.style.display = i === index ? "block" : "none";
		});
	}

	private nextSlide() {
		this.currentIndex = (this.currentIndex + 1) % this.items.length;
		this.showSlide(this.currentIndex);
	}

	private prevSlide() {
		this.currentIndex =
			(this.currentIndex - 1 + this.items.length) % this.items.length;
		this.showSlide(this.currentIndex);
	}

	render() {
		return (
			<Host>
				<div
					class="carousel-container"
					part="carousel">
					<slot></slot>
				</div>
				<div class="carousel-controls">
					<button onClick={() => this.prevSlide()}>Previous</button>
					<button onClick={() => this.nextSlide()}>Next</button>
				</div>
			</Host>
		);
	}
}
