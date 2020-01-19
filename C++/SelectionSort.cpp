
#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;


void selectionSort(int arr[], int size) {
	
	for (int i = 0; i < size-1; i++) {
		int min = i;
		for (int j = i+1; j < size; j++) {
			if (arr[j] < arr[min]) 
				min = j;
		}
		int temp = arr[i];
		arr[i] = arr[min];
		arr[min] = temp;
	}
}



int main() {
	
	const int MAX_ARRAY_SIZE = 10;
	int arr[MAX_ARRAY_SIZE];
	srand(time(NULL));
	
	for (int i = 0; i < MAX_ARRAY_SIZE; i++) {
		arr[i] = rand() % 100;
	}
	
	cout << "ARRAY BEFORE SELECTION SORT APPLIED" << endl;
	for (int i = 0; i < MAX_ARRAY_SIZE; i++) {
		cout << arr[i] << ' ';
	}
	
	cout << endl;
	
	selectionSort(arr, MAX_ARRAY_SIZE);
	
	cout << "ARRAY AFTER SELECTION SORT APPLIED" << endl;
	for (int i = 0; i < MAX_ARRAY_SIZE; i++) {
		cout << arr[i] << ' ';
	}
	
	cout << endl;
}