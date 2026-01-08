module.exports = {
  apps: [
    {
      name: 'vanesasellingcomics',
      script: 'npm',
      args: 'start',
      cwd: '/opt/sites/vanessa-selling-comics',
      env: {
        NODE_ENV: 'production',
        PORT: 3005,
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
    },
  ],
};
