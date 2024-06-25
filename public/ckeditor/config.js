/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function(config) {
    config.extraPlugins = '';
    config.plugins = 'ckeditor_wiris,' + config.plugins;
    config.fontSize_defaultLabel = '24px';
    // config.fontSize_sizes = '24/24px;16/16px;18/18px;20/20px;22/22px;28/28px;32/32px;';
    config.allowedContent = true;
    var savedSelection;
    config.on = {
        instanceReady: function (ev) {
            var editor = ev.editor;
            var editable = editor.editable();
            editable.on('paste', function (evt) {
                evt.data.preventDefault();
                savedSelection = editor.getSelection().getRanges();
                var clipboardData = evt.data.$.clipboardData;
                var pastedText = clipboardData.getData('text/plain');
                editor.insertText(pastedText);
                setTimeout(function() {
                    editor.getSelection().selectRanges(savedSelection);
                }, 0);
            });
            // Apply custom CSS to set default font size for CKEditor content
            var customCss = 'body { font-size: 24px; }';

            // Apply custom CSS to set default font size for WIRIS elements
            customCss += ' .Wirisformula { font-size: 24px !important; }';

            editor.document.appendStyleText(customCss);
        }
    };
};
