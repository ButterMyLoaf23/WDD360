// schemas.mjs

export const UserSchema = {
  title: "User",
  type: "object",
  required: ["_id", "username", "email", "password", "createdAt"],

  properties: {
    _id: { type: "string" },

    username: {
      type: "string",
      minLength: 3,
      maxLength: 30
    },

    email: {
      type: "string",
      format: "email"
    },

    password: {
      type: "string",
      minLength: 8
    },

    cart: {
      type: "array",
      items: {
        type: "object",
        properties: {
          productId: { type: "string" },
          quantity: {
            type: "integer",
            minimum: 1
          }
        }
      }
    },

    createdAt: {
      type: "string",
      format: "date-time"
    }
  }
};

export const ProductSchema = {
  title: "Product",
  type: "object",

  required: ["_id", "name", "price", "category"],

  properties: {
    _id: { type: "string" },

    name: { type: "string" },

    category: { type: "string" },

    description: { type: "string" },

    price: {
      type: "number",
      minimum: 0
    },

    images: {
      type: "array",
      items: {
        type: "string"
      }
    },

    averageRating: {
      type: "number",
      minimum: 0,
      maximum: 5
    },

    reviewCount: {
      type: "integer",
      minimum: 0
    }
  }
};

export const OrderSchema = {
  title: "Order",
  type: "object",

  required: [
    "_id",
    "userId",
    "items",
    "total",
    "createdAt"
  ],

  properties: {
    _id: { type: "string" },

    userId: { type: "string" },

    items: {
      type: "array",

      items: {
        type: "object",

        properties: {
          productId: {
            type: "string"
          },

          productName: {
            type: "string"
          },

          quantity: {
            type: "integer",
            minimum: 1
          },

          priceAtPurchase: {
            type: "number"
          }
        }
      }
    },

    total: {
      type: "number"
    },

    createdAt: {
      type: "string",
      format: "date-time"
    }
  }
};

export const ReviewSchema = {
  title: "Review",
  type: "object",

  required: [
    "_id",
    "productId",
    "userId",
    "rating",
    "createdAt"
  ],

  properties: {
    _id: { type: "string" },

    productId: {
      type: "string"
    },

    userId: {
      type: "string"
    },

    rating: {
      type: "integer",
      minimum: 1,
      maximum: 5
    },

    comment: {
      type: "string",
      maxLength: 1000
    },

    createdAt: {
      type: "string",
      format: "date-time"
    }
  }
};

export const AlertSchema = {
  title: "Alert",
  type: "object",

  required: [
    "_id",
    "title",
    "type",
    "status"
  ],

  properties: {
    _id: {
      type: "string"
    },

    title: {
      type: "string"
    },

    type: {
      type: "string",

      enum: [
        "warning",
        "info",
        "promotion"
      ]
    },

    status: {
      type: "string",

      enum: [
        "active",
        "inactive"
      ]
    }
  }
};