from setuptools import setup, find_packages

VERSION = '0.1.0'


setup(
    name="mkdocs-jinks",
    version=VERSION,
    url='http://www.mkdocs.org',
    license='BSD',
    description='Jinks themes for MkDocs',
    author='Anetwork Technical Team',
    author_email='support@anetwork.ir',
    packages=find_packages(),
    include_package_data=True,
    entry_points={
        'mkdocs.themes': [
            'jinks_en = mkdocs_jinks.jinks_en',
            'jinks_fa = mkdocs_jinks.jinks_fa',
        ]
    },
    zip_safe=False
)
