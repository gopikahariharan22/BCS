- abstraction??
- single responsibility principle??
- every function should do only one job!!!!
- composing (using multiple function)
- 

- Red book (design principle) (how to structure code) (Architect)

- fetch function???
- setTimeout (Callback function , timer)

# callback???????



    
    - if a function call itself?? ---> infinite ---> Recursion!!
    - if event done function callback
    - callback function generally associated with purticular time component or may be not

    - when fn takes another fn as arguement called callback function
    - callback is higher order function!!

# event loop    ---------->      (interview quetion)

    - is javascript single thread or multithread ??
         -  thread? quad? process run time? process? running software/program/code is process!
         -  process runs in thread
         -  1 core = 2 thread
         -  one process runs in one thread
         - so how multiple processes runs in computer???????????
            - task vs process??
            - CPU Scheduling?
            - cpu splits process as multiple task and allocate to a thread
            - Deadlock?? ----> if two thread sharing same process deadlock may occur
            - 

            - javascript is Single thread but Asyncronous i.e Concurrent

            - syncronous vs Asyncronous??
               - if multiple task runs concurrently called Asynchronous
    - Stack - first in last out i.e last in first out
    - queue - first in first out last in last out
    - callstack is main thread where only javascript runs
    - callstack vs webAPI

    - event loop checks weather call empty to push queue to callstack
    - Async function???? ---------->   transfrerred to webAPI
    - main thread is call stack 
      - keep call stack free means writing quality code!!!!!!

    - stack overflow???  i.e recursion?
    - event loop push queue to call stack only when it is empty
    - 



# Promises
 - promise states ------> pending / fullfilled / rejected
 - to avoid call back hell 
 - .then  ---- fullfilled
 - 
