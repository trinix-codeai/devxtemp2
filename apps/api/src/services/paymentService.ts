export const paymentService = {
  createIntent(provider: "stripe" | "paypal", amount: number) {
    return {
      provider,
      amount,
      externalId: `${provider}_${Date.now()}`,
      status: "created" as const
    };
  },
  handleWebhook(provider: "stripe" | "paypal", payload: Record<string, unknown>) {
    return {
      provider,
      acknowledged: true,
      payload
    };
  }
};
