"use server";

// Submissions are disabled for this demonstration site.
export async function waiverAction() {
  return {
    message: "Disabled",
    success: false,
  };
}
