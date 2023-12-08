module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_pqAZvVkCihTNwGDWAD5WGrDZmuxD/1sFYAfYJHg",
      apiToken: "BnJlh0NjZT4LCdRNo7Q79Pu5",
      appFilter: "djoni-tuna-back",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
