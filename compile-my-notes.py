import os
files = [f for f in os.listdir('.') if os.path.isfile(f)]
composite_file = 'compiled-notes.js'
svFileHandler = open(composite_file, 'w')
for f in files:
    print(f)
    if f == 'compiled-notes.js': continue
    if f == 'compile-my-notes.py': continue
    topicHeader = '// '+str(f)+'\n'
    svFileHandler.write(topicHeader)
    for line in open(f, 'r'):
        print(line)
        svFileHandler.write(line)



