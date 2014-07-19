/*global $*/

/**
 * Initializing all jQuery TextFill containers
 */
($(function() {

	// The logo, with three containers
	$('#header-logo-jquery').textfill({
		maxFontPixels: 100,
		minFontPixels: 1
	});
	$('#header-logo-text').textfill({
		maxFontPixels: 100
	});
	$('#header-logo-fill').textfill({
		maxFontPixels: 100
	});

	// First example - when the user types on the
	// input box, make it update the text right below
	function firstExampleUpdate() {
		$('#example-one-value').html(
			'<span>' + $('#example-one-input').val() + '</span>'
		);
		$('#example-one-value').textfill({
			debug: true,
			maxFontPixels: 200
		});
	}
	$('#example-one-input').keyup(firstExampleUpdate);
	firstExampleUpdate();


















	// Initializing Highlight.js
	hljs.initHighlightingOnLoad();
}));

