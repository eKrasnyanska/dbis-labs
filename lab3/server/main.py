import os

from server.routes import *

if __name__ == '__main__':
    # port = int(os.environ.get("PORT", 8000))
    app.run(host="0.0.0.0", port=5000)
