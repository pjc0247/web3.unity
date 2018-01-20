using System;
using System.Runtime.InteropServices;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Metamask : MonoBehaviour
{
    #region IMPORT
    [DllImport("__Internal")]
    private static extern void w3u_initialize();
    [DllImport("__Internal")]
    private static extern bool w3u_isReady();
    [DllImport("__Internal")]
    private static extern string w3u_getAccount(int idx);
    [DllImport("__Internal")]
    private static extern string w3u_getFirstAccount();
    [DllImport("__Internal")]
    private static extern bool w3u_sendFund(string address, double value);

    [DllImport("__Internal")]
    private static extern double w3u_getBalance(string address);
    #endregion // IMPORT

    public static void Initialize()
    {
        w3u_initialize();
    }
    public static bool IsReady()
    {
        return w3u_isReady();
    }
    public static string GetFirstAccount()
    {
        return w3u_getFirstAccount();
    }
    public static string GetAccount(int idx)
    {
        return w3u_getAccount(idx);
    }
    public static bool SendFund(string receiver, double value)
    {
        return w3u_sendFund(receiver, value);
    }
    public static double GetBalance(string address)
    {
        return w3u_getBalance(address);
    }
}
