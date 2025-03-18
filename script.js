document.querySelector("#explore").addEventListener("click", (e) => {
	document.querySelector("#content").scrollIntoView({
		behavior: "smooth",
		block: "start",
	})
})
