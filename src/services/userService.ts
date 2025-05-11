import logger from '../utils/logger';
import RequestContext from '../utils/context';

// Define the User interface
export interface User {
    id: number;
    name: string;
    email: string;
    username: string;
}

// Performance tracking function
export async function trackPerformance<T>(
    operationName: string,
    operation: () => Promise<T>
): Promise<T> {
    const startTime = performance.now();
    const context = RequestContext.getInstance();
    const { correlationId, requestId } = context.getContext();

    logger.info(`[${correlationId}] Starting ${operationName}`, {
        requestId,
        operation: operationName,
        timestamp: new Date().toISOString()
    });

    try {
        const result = await operation();
        const endTime = performance.now();
        const elapsedTime = endTime - startTime;

        logger.info(`[${correlationId}] Completed ${operationName}`, {
            requestId,
            operation: operationName,
            elapsedTime: `${elapsedTime.toFixed(2)}ms`,
            timestamp: new Date().toISOString()
        });

        return result;
    } catch (error) {
        const endTime = performance.now();
        const elapsedTime = endTime - startTime;

        logger.error(`[${correlationId}] Failed ${operationName}`, {
            requestId,
            operation: operationName,
            elapsedTime: `${elapsedTime.toFixed(2)}ms`,
            error: error instanceof Error ? error.message : 'Unknown error',
            timestamp: new Date().toISOString()
        });

        throw error;
    }
}

// Async function to fetch users
export async function fetchUsers(): Promise<User[]> {
    return trackPerformance('fetchUsers', async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const users = await response.json() as User[];
        return users;
    });
}

// Example usage with modern async/await
export async function displayUsers() {
    return trackPerformance('displayUsers', async () => {
        const context = RequestContext.getInstance();
        const { correlationId, requestId } = context.getContext();

        const users = await fetchUsers();
        logger.debug(`[${correlationId}] Users data:`, {
            requestId,
            users: JSON.stringify(users, null, 2)
        });
    });
} 