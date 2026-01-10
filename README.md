# Zensical Installation

Zensical is a modern static site generator designed to simplify building and maintaining project documentation.

https://zensical.org/docs/get-started/

# Setup

## Install with uv

uv creates the venv and other essential files

```
uv init
uv add zensical
.venv\Scripts\Activate.ps1
```

## To run

Updates should be automatically included
```
zensical serve
```
Point your browser to localhost:8000 and you should see:


## To build

To force build the site
```
zensical build
```
