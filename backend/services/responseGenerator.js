const sendingMessages = {
    0: 'Success',
    1: 'Permission Denied!',
    2: 'Login or Password is Wrong',
    3: 'Something Went Wrong',
    4: 'Missing value - '
};

export function generate(error,code,data = [],value = '') {
    return {
        error,
        message: sendingMessages[code] + (value || ''),
        data
    };
}
