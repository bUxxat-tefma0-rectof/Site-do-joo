from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Meu Site API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # URL do frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"status": "API funcionando"}


# Os routers serão incluídos aqui nas próximas partes
# from app.routers import auth, users, products
# app.include_router(auth.router, prefix="/auth", tags=["Autenticação"])
