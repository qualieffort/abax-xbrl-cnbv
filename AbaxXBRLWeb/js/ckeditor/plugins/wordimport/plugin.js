CKEDITOR.plugins.add('wordimport', {
    icons: 'wordimport',
    init: function (editor) {
        editor.addCommand('wordimport', new CKEDITOR.dialogCommand('wordimportDialog'));

        editor.ui.addButton('WordImport', {
            label: 'Importar documento Word',
            command: 'wordimport',
            toolbar: 'insert'
        });

        CKEDITOR.dialog.add('wordimportDialog', this.path + 'dialogs/wordimport.js');
    }
});