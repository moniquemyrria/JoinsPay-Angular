import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IContractResponse } from 'src/app/contract-response/contract-response';
import { environment } from 'src/environments/environment';
import { IAccountCategory } from '../../view/register/account-category/account-category-model';
import { IAccount } from '../../view/register/account/account-model';
import { IExpenseCategory } from '../../view/register/expense-category/expense-category-model';
import { IRevenueCategory } from '../../view/register/revenue-category/revenue-category-model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
		})
	};
  
  constructor(private httpClient: HttpClient) { }

  //revenue category
  GetListRevenueCategory(): Observable<IRevenueCategory[]>  {
    return this.httpClient.get<IRevenueCategory[]>(`${environment.baseURL}RevenueCategory`, this.httpOptions);
  }

  GetIdRevenueCategory(id: number): Observable<IRevenueCategory>  {
    return this.httpClient.get<IRevenueCategory>(`${environment.baseURL}RevenueCategory/` + id, this.httpOptions);
  }

  PostRevenueCategory(revenueCategory: IRevenueCategory): Observable<IContractResponse>  {
    return this.httpClient.post<IContractResponse>(`${environment.baseURL}RevenueCategory`, revenueCategory, this.httpOptions);
  }

  PutRevenueCategory(revenueCategory: IRevenueCategory): Observable<IContractResponse>  {
    return this.httpClient.put<IContractResponse>(`${environment.baseURL}RevenueCategory/` + revenueCategory.id, revenueCategory, this.httpOptions);
  }

  DeleteRevenueCategory(id: number): Observable<IContractResponse>  {
    return this.httpClient.delete<IContractResponse>(`${environment.baseURL}RevenueCategory/` + id, this.httpOptions);
  }

  //expense category
  GetListExpenseCategory(): Observable<IExpenseCategory[]>  {
    return this.httpClient.get<IExpenseCategory[]>(`${environment.baseURL}ExpenseCategory`, this.httpOptions);
  }

  GetIdExpenseCategory(id: number): Observable<IExpenseCategory>  {
    return this.httpClient.get<IExpenseCategory>(`${environment.baseURL}ExpenseCategory/` + id, this.httpOptions);
  }

  PostExpenseCategory(expenseCategory: IExpenseCategory): Observable<IContractResponse>  {
    return this.httpClient.post<IContractResponse>(`${environment.baseURL}ExpenseCategory`, expenseCategory, this.httpOptions);
  }

  PutExpenseCategory(expenseCategory: IExpenseCategory): Observable<IContractResponse>  {
    return this.httpClient.put<IContractResponse>(`${environment.baseURL}ExpenseCategory/` + expenseCategory.id, expenseCategory, this.httpOptions);
  }

  DeleteExpenseCategory(id: number): Observable<IContractResponse>  {
    return this.httpClient.delete<IContractResponse>(`${environment.baseURL}ExpenseCategory/` + id, this.httpOptions);
  }

   //account category
   GetListAccountCategory(): Observable<IAccountCategory[]>  {
    return this.httpClient.get<IAccountCategory[]>(`${environment.baseURL}AccountCategory`, this.httpOptions);
  }

  GetIdAccountCategory(id: number): Observable<IAccountCategory>  {
    return this.httpClient.get<IAccountCategory>(`${environment.baseURL}AccountCategory/` + id, this.httpOptions);
  }

  PostAccountCategory(accountCategory: IAccountCategory): Observable<IContractResponse>  {
    return this.httpClient.post<IContractResponse>(`${environment.baseURL}AccountCategory`, accountCategory, this.httpOptions);
  }

  PutAccountCategory(accountCategory: IAccountCategory): Observable<IContractResponse>  {
    return this.httpClient.put<IContractResponse>(`${environment.baseURL}AccountCategory/` + accountCategory.id, accountCategory, this.httpOptions);
  }

  DeleteAccountCategory(id: number): Observable<IContractResponse>  {
    return this.httpClient.delete<IContractResponse>(`${environment.baseURL}AccountCategory/` + id, this.httpOptions);
  }

  //account
  GetListAccount(): Observable<IAccount[]>  {
    return this.httpClient.get<IAccount[]>(`${environment.baseURL}Account`, this.httpOptions);
  }

  GetIdAccount(id: number): Observable<IAccount>  {
    return this.httpClient.get<IAccount>(`${environment.baseURL}Account/` + id, this.httpOptions);
  }

  PostAccount(account: IAccount): Observable<IContractResponse>  {
    return this.httpClient.post<IContractResponse>(`${environment.baseURL}Account`, account, this.httpOptions);
  }

  PutAccount(account: IAccount): Observable<IContractResponse>  {
    return this.httpClient.put<IContractResponse>(`${environment.baseURL}Account/` + account.id, account, this.httpOptions);
  }

  DeleteAccount(id: number): Observable<IContractResponse>  {
    return this.httpClient.delete<IContractResponse>(`${environment.baseURL}Account/` + id, this.httpOptions);
  }
}
