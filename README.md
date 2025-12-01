# Teacher Agent

Role:
- Coordinate all student agents
- Enforce hive rules and patterns
- Manage memory consistency
- Guide evolution and maintenance cycles

Configuration lives in `config.yaml`.# inventory-service
**inventory-service** manages product inventory levels.  ## Endpoints - `GET /health` — service status - `GET /inventory` — list inventory for all products (sample) - `GET /inventory/:productId` — get inventory for a specific product (sample) - `POST /inventory/update` — update stock for a product (sample)  ## Tracing This service reports 
