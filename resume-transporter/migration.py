from tortoise import Tortoise
import asyncio


async def migrate():
    await Tortoise.init(config_file="db.yaml")
    await Tortoise.generate_schemas()


if __name__ == "__main__":
    asyncio.run(migrate())
