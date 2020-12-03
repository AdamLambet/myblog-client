const stylelint = require('stylelint');
module.exports = {
    plugins: [
        // autoPrefix

        // stylelint
        stylelint({
            config: {
                rules: {
                    'declaration-no-important': true,
                }
            }
        })
    ]
}