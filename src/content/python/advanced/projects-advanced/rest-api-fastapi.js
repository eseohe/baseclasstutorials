export const restApiFastapiContent = {
  id: 'rest-api-fastapi',
  title: 'Implement CRUD endpoints with SQLite and ORM models',
  duration: '40 min',
  objectives: [
    'Set up a FastAPI project',
    'Create ORM models with SQLAlchemy',
    'Build CRUD endpoints',
    'Use SQLite for storage',
    'Organize code in multiple files'
  ],
  sections: [
    {
      type: 'text',
      title: 'Project Structure',
      content: `A typical FastAPI project for CRUD with SQLite might look like this:\n\nmyfastapiapp/\n├── app/\n│   ├── main.py\n│   ├── models.py\n│   ├── database.py\n│   ├── crud.py\n│   └── schemas.py\n├── requirements.txt\n└── README.md` 
    },
    {
      type: 'code',
      title: 'requirements.txt',
      code: `fastapi\nuvicorn\nsqlalchemy\ndatabases\npydantic` 
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `These are the main packages you need. Install them with:\n\n    pip install -r requirements.txt` 
    },
    {
      type: 'code',
      title: 'app/database.py',
      code: `from sqlalchemy import create_engine\nfrom sqlalchemy.orm import sessionmaker, declarative_base\n\nSQLALCHEMY_DATABASE_URL = 'sqlite:///./test.db'\nengine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})\nSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)\nBase = declarative_base()`
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `This sets up the SQLite database and SQLAlchemy ORM base. All models will inherit from Base.`
    },
    {
      type: 'code',
      title: 'app/models.py',
      code: `from sqlalchemy import Column, Integer, String\nfrom .database import Base\n\nclass Item(Base):\n    __tablename__ = 'items'\n    id = Column(Integer, primary_key=True, index=True)\n    name = Column(String, index=True)\n    description = Column(String, index=True)`
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `This defines an Item model/table for the database.`
    },
    {
      type: 'code',
      title: 'app/schemas.py',
      code: `from pydantic import BaseModel\n\nclass ItemBase(BaseModel):\n    name: str\n    description: str\n\nclass ItemCreate(ItemBase):\n    pass\n\nclass ItemRead(ItemBase):\n    id: int\n    class Config:\n        orm_mode = True`
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `Pydantic schemas define the shape of data for requests and responses.`
    },
    {
      type: 'code',
      title: 'app/crud.py',
      code: `from sqlalchemy.orm import Session\nfrom . import models, schemas\n\ndef get_item(db: Session, item_id: int):\n    return db.query(models.Item).filter(models.Item.id == item_id).first()\n\ndef get_items(db: Session, skip=0, limit=10):\n    return db.query(models.Item).offset(skip).limit(limit).all()\n\ndef create_item(db: Session, item: schemas.ItemCreate):\n    db_item = models.Item(**item.dict())\n    db.add(db_item)\n    db.commit()\n    db.refresh(db_item)\n    return db_item\n\ndef delete_item(db: Session, item_id: int):\n    item = get_item(db, item_id)
    if item:
        db.delete(item)
        db.commit()
    return item`
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `CRUD functions interact with the database using SQLAlchemy ORM.`
    },
    {
      type: 'code',
      title: 'app/main.py',
      code: `from fastapi import FastAPI, Depends, HTTPException\nfrom sqlalchemy.orm import Session\nfrom . import models, schemas, crud, database\n\napp = FastAPI()\n\nmodels.Base.metadata.create_all(bind=database.engine)\n\ndef get_db():\n    db = database.SessionLocal()\n    try:\n        yield db\n    finally:\n        db.close()\n\n@app.post('/items/', response_model=schemas.ItemRead)\ndef create_item(item: schemas.ItemCreate, db: Session = Depends(get_db)):\n    return crud.create_item(db, item)\n\n@app.get('/items/', response_model=list[schemas.ItemRead])\ndef read_items(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):\n    return crud.get_items(db, skip=skip, limit=limit)\n\n@app.get('/items/{item_id}', response_model=schemas.ItemRead)\ndef read_item(item_id: int, db: Session = Depends(get_db)):\n    db_item = crud.get_item(db, item_id)
    if db_item is None:
        raise HTTPException(status_code=404, detail='Item not found')
    return db_item\n\n@app.delete('/items/{item_id}')\ndef delete_item(item_id: int, db: Session = Depends(get_db)):\n    item = crud.delete_item(db, item_id)
    if item is None:
        raise HTTPException(status_code=404, detail='Item not found')
    return {'ok': True}`
    },
    {
      type: 'text',
      title: 'Explanation',
      content: `main.py wires everything together and exposes the CRUD endpoints.\n\nRun the app with:\n\n    uvicorn app.main:app --reload\n\nVisit http://127.0.0.1:8000/docs for the interactive API docs.`
    },
    {
      type: 'text',
      title: 'Best Practices',
      content: `- Keep code organized in separate files\n- Use Pydantic schemas for validation\n- Use SQLAlchemy ORM for database access\n- Test endpoints with the interactive docs\n- Add more models and endpoints as needed`
    }
  ]
};