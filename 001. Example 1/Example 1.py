from random import *


class Caracol:
    def SortCaracol(self,MaxRow, MaxCol,MaxSize,Array):
        ArrayResult = []
        Start = 0 
        row = 0 
        ArrayResult =[]
        while ( len(ArrayResult) <= MaxSize-1):
            for col in range(Start,MaxCol):
                if ( len(ArrayResult) <= MaxSize-1):
                    if MaxRow==row:
                      row = row -1
                    ArrayResult.append(Array[row][col])
                    #print("> X:" + str(col) +" Y:"+str(row) +" " +str(Array[row][col]))
            for row in range(Start+1,MaxRow):
                if ( len(ArrayResult) <= MaxSize-1):                    
                    ArrayResult.append(Array[row][col])
                    #print("v" +" " +str(Array[row][col]))
            for col in range(MaxCol-1,Start,-1):
                if ( len(ArrayResult) <= MaxSize-1):
                    ArrayResult.append(Array[row][col-1])
                    #print("<" +" " +str(Array[row][col-1]))

            for row in range(MaxRow-1,Start+1,-1):
                if ( len(ArrayResult) <= MaxSize-1):
                    ArrayResult.append(Array[row-1][col-1])
                    #print("~" +" " +str(Array[row-1][col-1]))
                if 0 == Start and row-1 == 1: #(MaxRow%row ==0):
                    row = row -1

            Start = Start + 1
            MaxCol = MaxCol - 1
            MaxRow = MaxRow - 1
        return ArrayResult
            
    def GetMaxLength(self,Array):
        MaxLength = 0
        for ArrayRow in Array:
            MaxLength = MaxLength + len(ArrayRow)
        return MaxLength
    def ValidationArray(self,Array):
        if len(Array)>0:
            MaxLength = len(Array[0])
            for ArrayRow in Array:
                if MaxLength>len(ArrayRow) or MaxLength<len(ArrayRow) :
                    return False
            return True
        return False

    def Run(self,Row,Col):
        #validar que los row tengan los mismos length o no sea una matriz vacia
        if Row>=2 and Col>=2:
            Array = self.GenerarMatriz(Row,Col)
            print(Array)
            if self.ValidationArray(Array):
                return self.SortCaracol(len(Array),len(Array[0]), len(Array) * len(Array[0]),Array)
            else:
                print("Favor de introducir una matriz con columnas equitativas/ o con datos")
                return []
        else:
            print("Tanto como el Row como Col deben ser mayor o igual a 2")
            return []
    def GenerarMatriz(self,MaxRow,MaxCol):
        Array = []
        x = 0
        for r in range(0,MaxRow):
            Row = []
            for c in range(0,MaxCol):
                x =  x + 1
                Row.append(x)
            Array.append(Row)
        return Array

obj= Caracol()


#Row,Col Deben Ser mayores a 2
print(obj.Run(randint(2, 10),randint(2, 10)))
    
 
