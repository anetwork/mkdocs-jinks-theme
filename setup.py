from setuptools import setup, find_packages

VERSION = '0.1.0'


setup(
    name="mkdocs-jinks",
    version=VERSION,
    url='https://github.com/anetwork/mkdocs-jinks-theme',
    license='BSD',
    description='Jinks themes for MkDocs',
    author='Anetwork Technical Team',
    author_email='dev@anetwork.io',
    packages=find_packages(),
    include_package_data=True,
    entry_points={
        'mkdocs.themes': [
            'jinks_en = mkdocs_jinks.jinks_en',
            'jinks_fa = mkdocs_jinks.jinks_fa'
        ]
    }
)
