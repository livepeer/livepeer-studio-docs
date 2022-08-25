module.exports = [
  {
    type: "category",
    label: "Stream",
    link: { type: "doc", id: "api/stream" },
    items: [
      {
        type: "doc",
        id: "api/create-a-new-stream",
        label: "Create a new stream",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "api/list-streams",
        label: "List streams",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "api/get-a-specific-stream-details",
        label: "Get a specific stream details",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "Object Store",
    link: { type: "doc", id: "api/object-store" },
    items: [
      {
        type: "doc",
        id: "api/receive-store-credentials",
        label: "Receive store credentials",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "api/list-object-store-credentials-by-user-id",
        label: "List object store credentials by userId",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "Multistream Target",
    link: { type: "doc", id: "api/multistream-target" },
    items: [
      {
        type: "doc",
        id: "api/list-existing-multistream-targets",
        label: "List existing multistream targets",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "api/create-new-multistream-target",
        label: "Create new multistream target",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "api/get-a-specific-multistream-target-details",
        label: "Get a specific multistream target details",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "api/enable-or-disables-an-existing-multistream-target",
        label: "Enable or disables an existing multistream target",
        className: "api-method patch",
      },
      {
        type: "doc",
        id: "api/delete-an-existing-multistream-target",
        label: "Delete an existing multistream target",
        className: "api-method delete",
      },
    ],
  },
  {
    type: "category",
    label: "User",
    link: { type: "doc", id: "api/user" },
    items: [
      {
        type: "doc",
        id: "api/receive-user-information",
        label: "Receive user information",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "api/list-users",
        label: "List users",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "api/update-user",
        label: "Update user",
        className: "api-method patch",
      },
    ],
  },
  {
    type: "category",
    label: "API Token",
    link: { type: "doc", id: "api/api-token" },
    items: [
      {
        type: "doc",
        id: "api/create-a-new-api-token",
        label: "Create a new api token",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "api/list-api-tokens",
        label: "List api tokens",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "Login",
    link: { type: "doc", id: "api/login" },
    items: [
      {
        type: "doc",
        id: "api/receive-user-login-information",
        label: "Receive user login information",
        className: "api-method post",
      },
    ],
  },
  {
    type: "category",
    label: "Verification",
    link: { type: "doc", id: "api/verification" },
    items: [
      {
        type: "doc",
        id: "api/verify-user-email",
        label: "Verify user email",
        className: "api-method post",
      },
    ],
  },
  {
    type: "category",
    label: "Password Reset",
    link: { type: "doc", id: "api/password-reset" },
    items: [
      {
        type: "doc",
        id: "api/create-a-password-reset-token",
        label: "Create a password reset token",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "api/confirm-password-reset-token",
        label: "Confirm password reset token",
        className: "api-method post",
      },
    ],
  },
  {
    type: "category",
    label: "Make Admin",
    link: { type: "doc", id: "api/make-admin" },
    items: [
      {
        type: "doc",
        id: "api/change-user-admin-status",
        label: "Change user admin status",
        className: "api-method post",
      },
    ],
  },
  {
    type: "category",
    label: "Webhook",
    link: { type: "doc", id: "api/webhook" },
    items: [
      {
        type: "doc",
        id: "api/get-a-list-of-webhooks-defined-by-the-user",
        label: "Get a list of webhooks defined by the user",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "api/create-a-new-webhook",
        label: "Create a new webhook",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "api/get-webhook-details",
        label: "Get webhook details",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "api/update-a-webhook",
        label: "Update a webhook",
        className: "api-method put",
      },
      {
        type: "doc",
        id: "api/delete-a-webhook",
        label: "Delete a webhook",
        className: "api-method delete",
      },
      {
        type: "doc",
        id: "api/get-a-list-of-assets-defined-by-the-user",
        label: "Get a list of assets defined by the user",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "Verify Email",
    link: { type: "doc", id: "api/verify-email" },
    items: [
      {
        type: "doc",
        id: "api/resend-user-email-verification",
        label: "Resend user email verification",
        className: "api-method post",
      },
    ],
  },
];
