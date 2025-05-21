module.exports = {
    apps: [
        {
            name: 'user-management-enterprise',
            script: './bin/www.js',
            instances: 'max',
            exec_mode: 'cluster',
        },
    ],
};