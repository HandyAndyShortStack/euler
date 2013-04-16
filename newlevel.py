import sys, os

os.mkdir(sys.argv[1]);

for extension in ('.py', '.rb', '.js'):
	file_name = str(sys.argv[1]) + '/solution' + extension
	with open(file_name, 'a') as out_file:
		out_file.write('')