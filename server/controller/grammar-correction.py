import sys
from gingerit.gingerit import GingerIt

incorrect_text = sys.argv[1]
parser = GingerIt()
corrected_text = parser.parse(incorrect_text)['result']

print(f'CORRECTED_TEXT: {corrected_text}')



