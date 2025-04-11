# /// script
# requires-python = ">=3.12"
# dependencies = [
#     "tortoise-orm[asycnpg]",
# ]
# ///

import asyncio
from tortoise import Tortoise


async def migrate():
    await Tortoise.init(config_file="db.yaml")
    await Tortoise.generate_schemas()


if __name__ == "__main__":
    asyncio.run(migrate())
