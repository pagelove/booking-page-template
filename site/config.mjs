export const config={
  "id": "booking",
  "repo": "booking-page-template",
  "title": "Studio Sessions",
  "heading": "Make time for a good idea.",
  "intro": "A sample booking request workspace. Requests are provisional until the owner confirms availability.",
  "noun": "request",
  "plural": "requests",
  "titleField": "title",
  "private": true,
  "fields": [
    {
      "key": "title",
      "label": "Request name",
      "type": "text",
      "required": true
    },
    {
      "key": "service",
      "label": "Service",
      "type": "select",
      "required": true,
      "options": [
        "Discovery conversation",
        "Design consultation",
        "Project review"
      ]
    },
    {
      "key": "date",
      "label": "Requested date",
      "type": "date",
      "required": true
    },
    {
      "key": "timezone",
      "label": "IANA timezone",
      "type": "text",
      "required": true,
      "default": "America/New_York"
    },
    {
      "key": "contact",
      "label": "Contact email",
      "type": "text",
      "required": true
    },
    {
      "key": "state",
      "label": "Status",
      "type": "select",
      "required": true,
      "options": [
        "Requested",
        "Under review",
        "Cancelled"
      ],
      "default": "Requested"
    },
    {
      "key": "notes",
      "label": "Request details",
      "type": "textarea",
      "required": false
    }
  ],
  "settings": [
    {
      "key": "name",
      "label": "Business name",
      "default": "Northline Appointments",
      "type": "text",
      "required": true
    },
    {
      "key": "headline",
      "label": "Headline",
      "default": "Make time to talk.",
      "type": "text",
      "required": true
    },
    {
      "key": "about",
      "label": "About your services",
      "default": "Discovery conversations, design consultations and project reviews. Requests need owner review.",
      "type": "textarea",
      "required": true
    },
    {
      "key": "availability",
      "label": "Availability information",
      "default": "Monday–Friday, 09:00–17:00 America/New_York. Request a preferred date; no slot is reserved automatically.",
      "type": "textarea",
      "required": true
    },
    {
      "key": "timezone",
      "label": "Business timezone",
      "default": "America/New_York",
      "type": "text",
      "required": true
    }
  ]
};
