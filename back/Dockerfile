# Используем официальный PHP образ с FPM
FROM php:8.1-fpm

# Установка системных зависимостей и расширений PHP
RUN apt-get update && apt-get install -y \
    curl \
    zip \
    unzip \
    git \
    libpq-dev \
    libonig-dev \
    libxml2-dev \
    libzip-dev \
    && docker-php-ext-install \
    pdo \
    pdo_pgsql \
    mbstring \
    xml \
    zip \
    opcache \
    && if ! pecl list | grep -q redis; then pecl install redis && docker-php-ext-enable redis; fi \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Установка Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Установка Node.js для работы с фронтендом (опционально)
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs

# Установка рабочей директории
WORKDIR /var/www/laravel

# Копирование файлов Laravel
COPY . /var/www/laravel

# Установка прав
RUN chown -R www-data:www-data /var/www/laravel \
    && chmod -R 755 /var/www/laravel/storage \
    && chmod -R 755 /var/www/laravel/bootstrap/cache

# Установка зависимостей через Composer
RUN composer install --optimize-autoloader --no-dev

# Открытие порта
EXPOSE 9000

# Запуск PHP-FPM
CMD ["php-fpm"]
