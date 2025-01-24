<?php

namespace App\Traits;

trait ApiResponse
{
    protected const HTTP_UNAUTHORIZED = 401;
    protected const HTTP_CREATED = 201;
    protected const HTTP_SUCCESS = 200;

    public function success($data, $code = 200)
    {
        return response()->json([
            'success' => true,
            'data' => $data,
        ], $code);
    }

    public function error($message, $code = 400)
    {
        return response()->json([
            'success' => false,
            'message' => $message,
        ], $code);
    }
}
