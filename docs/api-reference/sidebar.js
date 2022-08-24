module.exports = [
  {
    type: "category",
    label: "stream",
    link: {
      type: "generated-index",
      title: "stream",
      slug: "/category/api-reference/stream",
    },
    items: [
      {
        type: "doc",
        id: "api-reference/create-a-new-stream",
        label: "Create a new stream",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "api-reference/list-streams",
        label: "List streams",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "api-reference/get-a-specific-stream-details",
        label: "Get a specific stream details",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "object-store",
    link: {
      type: "generated-index",
      title: "object-store",
      slug: "/category/api-reference/object-store",
    },
    items: [
      {
        type: "doc",
        id: "api-reference/receive-store-credentials",
        label: "Receive store credentials",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "api-reference/list-object-store-credentials-by-user-id",
        label: "List object store credentials by userId",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "multistream-target",
    link: {
      type: "generated-index",
      title: "multistream-target",
      slug: "/category/api-reference/multistream-target",
    },
    items: [
      {
        type: "doc",
        id: "api-reference/list-existing-multistream-targets",
        label: "List existing multistream targets",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "api-reference/create-new-multistream-target",
        label: "Create new multistream target",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "api-reference/get-a-specific-multistream-target-details",
        label: "Get a specific multistream target details",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "api-reference/enable-or-disables-an-existing-multistream-target",
        label: "Enable or disables an existing multistream target",
        className: "api-method patch",
      },
      {
        type: "doc",
        id: "api-reference/delete-an-existing-multistream-target",
        label: "Delete an existing multistream target",
        className: "api-method delete",
      },
    ],
  },
  {
    type: "category",
    label: "user",
    link: {
      type: "generated-index",
      title: "user",
      slug: "/category/api-reference/user",
    },
    items: [
      {
        type: "doc",
        id: "api-reference/receive-user-information",
        label: "Receive user information",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "api-reference/list-users",
        label: "List users",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "api-reference/update-user",
        label: "Update user",
        className: "api-method patch",
      },
    ],
  },
  {
    type: "category",
    label: "api-token",
    link: {
      type: "generated-index",
      title: "api-token",
      slug: "/category/api-reference/api-token",
    },
    items: [
      {
        type: "doc",
        id: "api-reference/create-a-new-api-token",
        label: "Create a new api token",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "api-reference/list-api-tokens",
        label: "List api tokens",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "login",
    link: {
      type: "generated-index",
      title: "login",
      slug: "/category/api-reference/login",
    },
    items: [
      {
        type: "doc",
        id: "api-reference/receive-user-login-information",
        label: "Receive user login information",
        className: "api-method post",
      },
    ],
  },
  {
    type: "category",
    label: "verification",
    link: {
      type: "generated-index",
      title: "verification",
      slug: "/category/api-reference/verification",
    },
    items: [
      {
        type: "doc",
        id: "api-reference/verify-user-email",
        label: "Verify user email",
        className: "api-method post",
      },
    ],
  },
  {
    type: "category",
    label: "password-reset",
    link: {
      type: "generated-index",
      title: "password-reset",
      slug: "/category/api-reference/password-reset",
    },
    items: [
      {
        type: "doc",
        id: "api-reference/create-a-password-reset-token",
        label: "Create a password reset token",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "api-reference/confirm-password-reset-token",
        label: "Confirm password reset token",
        className: "api-method post",
      },
    ],
  },
  {
    type: "category",
    label: "make-admin",
    link: {
      type: "generated-index",
      title: "make-admin",
      slug: "/category/api-reference/make-admin",
    },
    items: [
      {
        type: "doc",
        id: "api-reference/change-user-admin-status",
        label: "Change user admin status",
        className: "api-method post",
      },
    ],
  },
  {
    type: "category",
    label: "webhook",
    link: {
      type: "generated-index",
      title: "webhook",
      slug: "/category/api-reference/webhook",
    },
    items: [
      {
        type: "doc",
        id: "api-reference/get-a-list-of-webhooks-defined-by-the-user",
        label: "Get a list of webhooks defined by the user",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "api-reference/create-a-new-webhook",
        label: "Create a new webhook",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "api-reference/get-webhook-details",
        label: "Get webhook details",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "api-reference/update-a-webhook",
        label: "Update a webhook",
        className: "api-method put",
      },
      {
        type: "doc",
        id: "api-reference/delete-a-webhook",
        label: "Delete a webhook",
        className: "api-method delete",
      },
      {
        type: "doc",
        id: "api-reference/get-a-list-of-assets-defined-by-the-user",
        label: "Get a list of assets defined by the user",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "verify-email",
    link: {
      type: "generated-index",
      title: "verify-email",
      slug: "/category/api-reference/verify-email",
    },
    items: [
      {
        type: "doc",
        id: "api-reference/resend-user-email-verification",
        label: "Resend user email verification",
        className: "api-method post",
      },
    ],
  },
];
