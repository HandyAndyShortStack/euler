import sys, os

def run(solution):
	if solution[-2:] == 'py':
		os.system('python ' + solution)
	elif solution[-2:] == 'rb':
		os.system('ruby ' + solution)
	elif solution[-2:] == 'js':
		os.system('node ' + solution)

if len(sys.argv) == 1 or sys.argv[1] == 'help':
	print "read eutest.py if you can't remember how this works"
elif sys.argv[1] == 'all':
	for i in range(1, 1000):
		if str(i) in os.listdir('.'):
			for solution in os.listdir(str(i)):
				run(str(i) + '/' + solution)
elif len(sys.argv) > 2:
	run(sys.argv[1] + '/solution.' + sys.argv[2])