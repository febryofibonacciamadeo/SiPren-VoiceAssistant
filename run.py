import multiprocessing

def startSiPren():
    print("Process 1 is running.")
    from main import start
    start()

def listedHotword():
    print("Process 2 is running.")
    from engine.features import hotword
    hotword()

if __name__ == '__main__':
    p1 = multiprocessing.Process(target=startSiPren)
    p2 = multiprocessing.Process(target=listedHotword)
    p1.start()
    p2.start()
    p1.join()

    if p2.is_alive():
        p2.terminate()
        p2.join()

    print("system stop")