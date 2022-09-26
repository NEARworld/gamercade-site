---
name: Bug report
about: Create a report to help us improve
title: ''
labels: bug
assignees: ''

---

## Steps To Reproduce
https://github.com/NEARworld/gamercade-site/blob/0322f21797136e3da968bd35857d0fa0f53fdcee/tsconfig.json#L10-L13

https://github.com/NEARworld/gamercade-site/blob/0322f21797136e3da968bd35857d0fa0f53fdcee/src/App.tsx#L1

## The current behavior
```
ERROR in ./src/App.tsx 7:29-50
Module not found: Error: Can't resolve 'pages/main' in '/home/artemismars/react/gamercade-site/src'
Did you mean './pages/main'?
```
## The expected behavior
https://github.com/NEARworld/gamercade-site/blob/0322f21797136e3da968bd35857d0fa0f53fdcee/src/App.tsx#L1
This import statement should work.
