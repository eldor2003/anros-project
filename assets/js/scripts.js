$(document).ready(function () {
	// hamburger
	$(".hamburger_menu").on("click", function (e) {
		e.preventDefault();
		$(".header_menus").toggleClass("active");
		$(".hamburger_menu").toggleClass("active");
		$(".header_phone").toggleClass("active");
		$("body").toggleClass("active");
	});

	//client swiper
	const client_swiper = new Swiper(".client_swiper", {
		// Default parameters
		slidesPerView: 5,
		spaceBetween: 110,
		loop: true,
		// grabCursor: true,
		// autoplay: {
		// 	delay: 2000,
		// },
		navigation: {
			nextEl: ".swiper_next",
			prevEl: ".swiper_prev",
		},
		// pagination: {
		// 	el: ".swiper-pagination",
		// },
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 2,
				spaceBetween: 40,
			},
			// when window width is >= 640px
			577: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			993: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1201: {
				slidesPerView: 5,
				spaceBetween: 110,
			},
		},
	});

	// otziv swiper
	const review_swiper = new Swiper(".review_swiper", {
		// Default parameters
		slidesPerView: 2,
		spaceBetween: 30,
		loop: true,
		// grabCursor: true,
		// autoplay: {
		// 	delay: 2000,
		// },
		navigation: {
			nextEl: ".review_next",
			prevEl: ".review_prev",
		},
		// pagination: {
		// 	el: ".swiper-pagination",
		// },
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1.15,
				spaceBetween: 20,
			},
			// when window width is >= 640px
			577: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			769: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			993: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1201: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
		},
	});

	// expert swiper
	const expert_swiper = new Swiper(".expert_swiper", {
		// Default parameters
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		// grabCursor: true,
		// autoplay: {
		// 	delay: 2000,
		// },
		navigation: {
			nextEl: ".expert_next",
			prevEl: ".expert_prev",
		},
		// pagination: {
		// 	el: ".swiper-pagination",
		// },
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			// when window width is >= 640px
			577: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			993: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1201: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			1440: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		},
	});

	// service active

	// service2 tabs
	// tab
	$(".service2_right:first").show();
	$(".service2_lists li:first").addClass("active");

	$(".service2_lists li").click(function (event) {
		event.preventDefault();
		index = $(this).index();
		$(".service2_lists li").removeClass("active");
		$(this).addClass("active");
		$(".service2_right").hide();
		$(".service2_right").eq(index).show();
	});

	// blog next
	$(".blog_btn").on("click", function (e) {
		e.preventDefault();
		$(".blog_pagination").slideDown();
	});

	// mobile_blog_swiper
	const mobile_blog_swiper = new Swiper(".mobile_blog_swiper", {
		// Default parameters
		slidesPerView: 1.09,
		spaceBetween: 10,
		loop: true,
		grabCursor: true,
		// autoplay: {
		// 	delay: 2000,
		// },
	});
	// mobile_service_swiper
	const mobile_service_swiper = new Swiper(".mobile_service_swiper", {
		// Default parameters
		slidesPerView: 1.1,
		spaceBetween: 10,
		loop: true,
		grabCursor: true,
		// autoplay: {
		// 	delay: 2000,
		// },
	});

	// service page services
	$(".service_item.hide").slideUp();
	$(".more_services").on("click", function (e) {
		e.preventDefault();
		$(".service_item.hide").slideDown();
		$(this).css("display", "none");
	});

	// main js codes
	$(".question_body").slideUp();
	$(".question_head").on("click", function (e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(this).find(".arrows").toggleClass("active");
		$(this).parent().find(".question_body").slideToggle(400);
		$(this)
			.parent(".question_item")
			.prevAll(".question_item")
			.find(".question_body")
			.slideUp();
		$(this)
			.parent(".question_item")
			.prevAll(".question_item")
			.find(".arrows")
			.removeClass("active");
		$(this)
			.parent(".question_item")
			.nextAll(".question_item")
			.find(".question_body")
			.slideUp();
		$(this)
			.parent(".question_item")
			.nextAll(".question_item")
			.find(".arrows")
			.removeClass("active");

		$(this)
			.parent(".question_item")
			.prevAll(".question_item")
			.find(".question_head")
			.removeClass("active");
		$(this)
			.parent(".question_item")
			.nextAll(".question_item")
			.find(".question_head")
			.removeClass("active");
	});

	// $(".select-items:first").on("click", function (e) {
	// 	window.location.href = "service2.html";
	// });
});

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
$(".dropbtn , .dropbtn span").on("click", function (e) {
	myFunction();
});
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
	if (!event.target.matches(".dropbtn")) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains("show")) {
				openDropdown.classList.remove("show");
			}
		}
	}
};

// counter
$(".first").animate(
	{
		lastValue: 3,
	},
	{
		duration: 2000,
		step: function (currentValue) {
			$(".first").text(Math.floor(currentValue));
		},
	}
);

$(".result_count .second").animate(
	{
		lastValue: 400,
	},
	{
		duration: 18000,
		step: function (currentValue) {
			$(".result_count .second").text(Math.floor(currentValue));
		},
	}
);
$(".result_count .third").animate(
	{
		lastValue: 4.7,
	},
	{
		duration: 8000,
		step: function (currentValue) {
			$(".result_count .third").text(currentValue.toFixed(1));
		},
	}
);

// document.addEventListener("contextmenu", (e) => e.preventDefault());

// function ctrlShiftKey(e, keyCode) {
// 	return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
// }

// document.onkeydown = (e) => {
// 	// Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
// 	if (
// 		event.keyCode === 123 ||
// 		ctrlShiftKey(e, "I") ||
// 		ctrlShiftKey(e, "J") ||
// 		ctrlShiftKey(e, "C") ||
// 		(e.ctrlKey && e.keyCode === "U".charCodeAt(0))
// 	)
// 		return false;
// };
