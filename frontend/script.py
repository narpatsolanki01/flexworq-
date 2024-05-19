import pyautogui
import time
from datetime import datetime

pyautogui.FAILSAFE = False

i = 0
def moveMouse(oldPosition):

        now = datetime.now()
        current_time = now.strftime("%H%M%S")
        #  check lunch time now time set is -: 01:33 to 14:07 
        # if(current_time >= "133300" and current_time <= "140700"):
        #     print("I can't Access your computer because now time is lunch time....")
        #     return 0

        global i
        i = i + 1
        screenX,screenY = pyautogui.size()
        if(i%2==0):
            pyautogui.moveTo(screenX/2,screenY/2, duration=0.1)
        else:
            pyautogui.moveTo(screenX/2+100,screenY/2+100, duration=0.1)

        current_time = now.strftime("%H:%M:%S")
        print("Moved on time -: "+current_time)

while(1):
    oldPosition = pyautogui.position()
    a, b = pyautogui.position()
  
    if(a==0 | b==0):
        pyautogui.moveTo(10,0, duration=0.1)
   
    time.sleep(5) # chnage moving time here

    # if old position and now postion same then mouse moved 
    if (oldPosition == pyautogui.position()):
        moveMouse(oldPosition)
