// ==UserScript==
// @name         Zoho Share to Facebook
// @namespace    https://tugatech.com.pt/
// @version      1.0
// @description  Auto-select the Facebook option in the Zoho Share extension
// @author       djprmf
// @include      https://social.zoho.com/social/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @grant        GM_addStyle
// ==/UserScript==


// Remove o alerta de publicação do Facebook
var badDivs = $("div#publisher-alert");
badDivs.remove ();

// Altera para a secção do Facebook após carregamento da página
window.addEventListener('load', function() {
    ReachSocialShare.PublishPost.switchEditorTab("fbPage_header",false);
}, false);
