# Credit Score Analyzer

Sistema completo de análise de crédito com avaliação de score e aprovação automatizada.

## 📋 Sobre o Projeto

O Credit Score Analyzer é uma aplicação full-stack que gerencia análises de crédito através de um sistema automatizado de pontuação (score). O sistema permite o cadastro de usuários, gera scores aleatórios e determina automaticamente a aprovação de crédito baseado nos scores gerados.

### Funcionalidades Principais

- Cadastro e gerenciamento de usuários
- Geração automática de scores de crédito
- Análise automática de aprovação de crédito
- Interface web responsiva para interação com o sistema
- API RESTful para integração com outros sistemas

## 🔧 Tecnologias Utilizadas

### Backend
- FastAPI (Python)
- PostgreSQL
- SQLAlchemy
- Pydantic

### Frontend
- React.js
- Axios
- TailwindCSS

### Infraestrutura
- Docker
- Kubernetes
- Argo Rollouts

## 🚀 Como Executar

### Pré-requisitos

- Docker e Docker Compose
- Kubernetes (Docker Desktop com Kubernetes habilitado)
- Argo Rollouts instalado no cluster
- Python 3.11+
- Node.js 16+

### Executando Localmente com Docker Compose

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/credit-score-analyzer.git
cd credit-score-analyzer
```

2. Inicie os serviços com Docker Compose:
```bash
docker-compose up -d
```

3. Acesse:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- Documentação da API: http://localhost:8000/docs

### Deployment no Kubernetes

1. Aplique as configurações do banco de dados:
```bash
kubectl apply -f k8s/database/
```

2. Realize o deploy do backend:
```bash
kubectl apply -f k8s/backend/
```

3. Realize o deploy do frontend:
```bash
kubectl apply -f k8s/frontend/
```

## 📊 Estrutura do Projeto

```
credit-score-analyzer/
├── backend/          # API em FastAPI
├── frontend/         # Interface em React
├── k8s/             # Configurações Kubernetes
└── docker-compose.yml
```

## 📝 API Endpoints

### Usuários
- `POST /users/` - Criar novo usuário
- `GET /users/` - Listar usuários
- `GET /users/{id}` - Detalhes do usuário

### Score
- `GET /scores/{user_id}` - Obter score do usuário

### Crédito
- `GET /credit/{user_id}` - Verificar aprovação de crédito

## 🔍 Regras de Negócio

- Scores são gerados aleatoriamente entre 300 e 850
- Aprovação de crédito requer score > 500
- Limites de crédito:
  - Score > 750: R$ 50.000,00
  - Score > 650: R$ 25.000,00
  - Score > 500: R$ 10.000,00

## 🚀 Estratégia de Deploy

O projeto utiliza Argo Rollouts para realizar deploys canários com três versões:
1. Release inicial com 20% do tráfego
2. Aumento gradual para 40%, 60% e 80%
3. Promoção final para 100% após validação

## 👥 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
