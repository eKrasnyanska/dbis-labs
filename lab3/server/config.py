import os


class Configuration(object):
    DEBUG = True
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    # SQLALCHEMY_DATABASE_URI = "postgresql://postgres:testing@localhost/postgres"
    # TODO: Add creds to secret manager
    SQLALCHEMY_DATABASE_URI = "postgresql://bzfivvwzdowayi:505c1ece27926e04fb7d98bc7c4451e823af4dc86040562a9ad1367c6fc43325@ec2-54-224-194-214.compute-1.amazonaws.com:5432/d842guil5376i1"
    APP_DIR = os.path.dirname(__file__)
    # SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL')
    # SQLALCHEMY_DATABASE_URI = os.environ
    # SECRET_KEY = 'very secret key'

    ### Flask-security ###
    # SECURITY_PASSWORD_SALT = 'salt'
    # SECURITY_PASSWORD_HASH = 'bcrypt'