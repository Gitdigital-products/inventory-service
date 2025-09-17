export function registerRoutes(app) {
  app.get("/health", (req, res) => {
    res.json({ status: "ok", service: "inventory-service" });
  });

  // Inventory-specific endpoints
  app.get("/inventory", (req, res) => {
    res.json([
      { id: 1, productId: 1, stock: 100 },
      { id: 2, productId: 2, stock: 50 }
    ]);
  });

  app.get("/inventory/:productId", (req, res) => {
    const { productId } = req.params;
    res.json({ productId, stock: 100 });
  });

  app.post("/inventory/update", (req, res) => {
    const { productId, quantity } = req.body;
    res.json({ message: `Updated stock for product ${productId} by ${quantity}` });
  });
}
