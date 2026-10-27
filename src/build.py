"""Gera index.html (página completa) e dist/artifact.html (corpo sem <head>, para o Artifact do Claude).

Uso: python3 src/build.py
"""
import base64, json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
A = ROOT / 'assets'
b64 = lambda p: base64.b64encode(p.read_bytes()).decode()

assets = {
    'sheet': b64(A / 'urban_sheet.png'),
    'snd': {k: b64(A / 'sounds' / f'{k}.wav') for k in ('shot', 'hit', 'die', 'hurt')},
}
body = (ROOT / 'src' / 'deck.html').read_text(encoding='utf-8')
body = body.replace('{{FONT_MINI}}', b64(A / 'fonts' / 'Kenney_Mini_Square.ttf'))
body = body.replace('{{FONT_PIXEL}}', b64(A / 'fonts' / 'Kenney_Pixel.ttf'))
body = body.replace('{{ASSETS_JSON}}', json.dumps(assets))
body = body.replace('{{QR_PNG}}', b64(ROOT / 'docs' / 'qrcode.png'))
S = A / 'sobre'
foto = next((f for f in sorted(S.glob('foto.*'))), None)
mime = {'.jpg': 'jpeg', '.jpeg': 'jpeg', '.png': 'png', '.webp': 'webp'}
body = body.replace('{{FOTO_TAG}}', f'<img class="foto" src="data:image/{mime[foto.suffix.lower()]};base64,{b64(foto)}" alt="Thiago Cortez">'
                    if foto else '<div class="foto vazia" aria-hidden="true">TC</div>')
body = body.replace('{{LOGO_MSG}}', b64(S / 'mango-salad.png'))
body = body.replace('{{IMG_HARPOONER}}', b64(S / 'harpooner.jpg'))
body = body.replace('{{IMG_ALAGADO}}', b64(S / 'alagado.jpg'))
body = body.replace('/*PLAT_JS*/', (ROOT / 'src' / 'plat.js').read_text(encoding='utf-8'))

(ROOT / 'dist').mkdir(exist_ok=True)
(ROOT / 'dist' / 'artifact.html').write_text(body, encoding='utf-8')
page = ('<!doctype html>\n<html lang="pt-BR">\n<head>\n<meta charset="utf-8">\n'
        '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'
        '</head>\n<body style="margin:0">\n' + body + '\n</body>\n</html>\n')
(ROOT / 'index.html').write_text(page, encoding='utf-8')
print('index.html e dist/artifact.html gerados')
