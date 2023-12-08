import psycopg2
from psycopg2.extensions import connection

class DatabaseConnection:
    _instance = None
    conn: connection

    def __new__(cls):
        if not cls._instance:
            cls._instance = super().__new__(cls)
            cls._instance.conn = cls._create_connection()
        return cls._instance

    @staticmethod
    def _create_connection() -> connection:
        return psycopg2.connect(
            host="localhost",
            database="guessing_game",
            user="ud39",
            password=""
        )

    @classmethod
    def get_conn(cls) -> connection | None:
        return cls._instance.conn if cls._instance != None else None

    @classmethod
    def disconnect(cls) -> None:
        return cls._instance.conn.close() if cls._instance != None else None
