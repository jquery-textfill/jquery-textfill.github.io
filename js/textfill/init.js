/*global $*/

/**
 * Initializing all jQuery TextFill containers
 */
($(function() {

	// The logo, with three containers
	$('#header-logo-jquery,#header-logo-text,#header-logo-fill').each(function() {
		$(this).textfill({
			maxFontPixels: 100,
			minFontPixels: 1,
			changeLineHeight: true
		});
	});

	// First example - when the user types on the
	// input box, make it update the text right below
	function firstExampleUpdate() {
		$('#example-one-value').html(
			'<span>' + $('#example-one-input').val() + '</span>'
		);
		$('#example-one-value').textfill({
			maxFontPixels: 200
		});
	}
	$('#example-one-input').keyup(firstExampleUpdate);
	firstExampleUpdate();



	// Unrelated to the example

	// Initializing Highlight.js
	hljs.initHighlightingOnLoad();
}));

