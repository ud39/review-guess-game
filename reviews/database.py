import psycopg2
from typing import Optional
from psycopg2.extensions import connection

class DatabaseConnection:
    _instance = None
    conn: Optional[connection]

    def __new__(cls):
        if not cls._instance:
            cls._instance = super().__new__(cls)
            cls._instance.conn = cls._create_connection()
        return cls._instance

    @staticmethod
    def _create_connection() -> Optional[connection]:
        try:
            return psycopg2.connect(
                host="localhost",
                database="guessing_game",
                user="ud39",
                password=""
            )
        except psycopg2.Error as e:
            print(f"Error creating a connection to the database: {e}")
            return None

    @classmethod
    def get_conn(cls) -> Optional[connection]:
        return cls._instance.conn if cls._instance != None else None

    @classmethod
    def disconnect(cls) -> None:
        if cls._instance and cls._instance.conn:
            cls._instance.conn.close()

        print("No connection to close.")

